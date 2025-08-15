import { useState } from 'react';

import { useRouter } from 'next/router';

import { X, Mail } from 'lucide-react';

import styles from '@/src/styles/modals/VerificationCodeModal.module.css';

interface VerificationCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onVerified: () => void;
  email: string;
}

const VerificationCodeModal = ({
  isOpen,
  onClose,
  email,
}: VerificationCodeModalProps) => {
  const [codes, setCodes] = useState(['', '', '', '', '', '']);
  const router = useRouter();

  if (!isOpen) return null;

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newCodes = [...codes];
    newCodes[index] = value;
    setCodes(newCodes);
  };

  const handleSubmit = () => {
    router.push('/auth/reset-password');
  };

  const handleResendCode = () => {
    setCodes(['', '', '', '', '', '']);
  };

  return (
    <>
      {/*==================== Modal Backdrop ====================*/}
      <div className={styles.backdrop} onClick={onClose}>
        {/*==================== Modal Container ====================*/}
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          {/*==================== Modal Header ====================*/}
          <div className={styles.header}>
            <h2 className={styles.title}>Enter Verification Code</h2>
            <button onClick={onClose} className={styles.close__button}>
              <X size={20} color="#6b7280" />
            </button>
          </div>
          {/*==================== End of Modal Header ====================*/}

          {/*==================== Modal Content ====================*/}
          <div className={styles.content}>
            <div className={styles.icon__wrapper}>
              <Mail size={48} color="#ffc107" />
            </div>

            <div className={styles.description}>
              <p className={styles.description__text}>
                We've sent a 6-digit verification code to{' '}
                <strong>{email}</strong>
              </p>
            </div>

            <form className={styles.form}>
              <div className={styles.code__inputs}>
                {codes.map((code, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={code}
                    onChange={e => handleInputChange(index, e.target.value)}
                    className={styles.code__input}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className={styles.verify__button}
              >
                Verify Code
              </button>
            </form>

            <div className={styles.resend__section}>
              <p className={styles.resend__text}>Didn't receive the code?</p>
              <button
                onClick={handleResendCode}
                className={styles.resend__button}
              >
                Resend Code
              </button>
            </div>
          </div>
          {/*==================== End of Modal Content ====================*/}
        </div>
        {/*==================== End of Modal Container ====================*/}
      </div>
      {/*==================== End of Modal Backdrop ====================*/}
    </>
  );
};

export default VerificationCodeModal;
