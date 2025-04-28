import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState, useRef } from 'react'
import validator from 'validator'

function CenterPopup({ message, type }: { message: string, type: 'success' | 'error' }) {
  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: '#fff',
        padding: '2rem 2.5rem',
        borderRadius: '12px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.2)',
        textAlign: 'center',
        color: type === 'success' ? '#198754' : '#dc3545',
        fontWeight: 600,
        fontSize: '1.2rem',
        minWidth: '220px'
      }}>
        {message}
      </div>
    </div>
  )
}

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry')
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [popup, setPopup] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
  const popupTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (popupTimeout.current) clearTimeout(popupTimeout.current);
    };
  }, []);

  async function handleCustomSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const email = (form.email as any).value;
    const message = (form.message as any).value;
    try {
      const res = await fetch('http://localhost/portfolio-api/submit_contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setSuccess(true);
        toast.success('Email successfully sent!');
        setPopup({ message: 'Massage successfully sent!', type: 'success' });
      } else {
        toast.error('Failed to send message');
        setPopup({ message: 'Failed to send message', type: 'error' });
      }
    } catch {
      toast.error('Failed to send message');
      setPopup({ message: 'Failed to send message', type: 'error' });
    }
    setLoading(false);

    // Hilangkan popup otomatis setelah 2 detik
    if (popupTimeout.current) clearTimeout(popupTimeout.current);
    popupTimeout.current = setTimeout(() => setPopup(null), 2000);
  }

  if (success) {
    return (
      <>
        <ContainerSucces>
          <h3>Thanks for getting in touch!</h3>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Back to the top
          </button>
          <ToastContainer />
        </ContainerSucces>
        {popup && <CenterPopup message={popup.message} type={popup.type} />}
      </>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleCustomSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={loading || !validEmail || !message}
        >
          {loading ? 'Sending...' : 'Submit'}
        </button>
      </form>
      <ToastContainer />
      {popup && <CenterPopup message={popup.message} type={popup.type} />}
    </Container>
  )
}
