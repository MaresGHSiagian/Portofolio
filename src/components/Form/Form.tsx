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
      background: 'rgba(0,0,0,0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeInBg 0.3s'
    }}>
      <style>
        {`
          @keyframes fadeInBg {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes popupScale {
            from { transform: scale(0.85); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2.5rem 2rem 2.5rem',
        borderRadius: '18px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        textAlign: 'center',
        minWidth: '260px',
        maxWidth: '90vw',
        animation: 'popupScale 0.25s',
        border: type === 'success' ? '2px solid #4ade80' : '2px solid #f87171'
      }}>
        <div style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {type === 'success' ? (
            <span style={{ color: '#22c55e' }}>
              {/* Check icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#bbf7d0"/>
                <path d="M7 13l3 3 7-7" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          ) : (
            <span style={{ color: '#ef4444' }}>
              {/* Error icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fee2e2"/>
                <path d="M15 9l-6 6M9 9l6 6" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </span>
          )}
        </div>
        <div style={{
          color: type === 'success' ? '#166534' : '#b91c1c',
          fontWeight: 600,
          fontSize: '1.15rem',
          marginBottom: '0.2rem'
        }}>
          {message}
        </div>
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
      const data = await res.json();
      console.log('API response:', data); // Debug respons API
      if (res.ok && data.status === 'success') {
        setSuccess(true);
        toast.success('Email successfully sent!');
        setPopup({ message: 'Success!', type: 'success' });
      } else {
        toast.error('Failed to send message');
        setPopup({ message: data.message || 'Failed to send message', type: 'error' });
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
