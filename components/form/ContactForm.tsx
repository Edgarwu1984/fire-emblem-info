import React, { ChangeEvent, FC, SyntheticEvent, useState } from 'react';
import { MdClose } from 'react-icons/md';

const ContactForm: FC = () => {
  const initialForm = { fullname: '', email: '', message: '' };

  const [status, setStatus] = useState<'idle' | 'pending'>('idle');

  const [alert, setAlert] = useState<{
    type: 'success' | 'error';
    message: string;
    show: boolean;
  }>({
    type: 'success',
    message: '',
    show: false,
  });

  const [formData, setFormData] = useState<{
    fullname: string;
    email: string;
    message: string;
  }>(initialForm);

  const handleValueChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      const emailData = JSON.stringify(formData);

      if (
        formData.fullname === '' ||
        formData.email === '' ||
        formData.message === ''
      ) {
        setAlert({
          type: 'error',
          message: 'Fullname, Email and Message can not be empty.',
          show: true,
        });
      } else {
        setStatus('pending');

        const res = await fetch(`/api/sendEmail`, {
          method: 'POST',
          body: emailData,
        });

        if (res.status === 200) {
          setAlert({
            type: 'success',
            message: 'Email has been sent.',
            show: true,
          });
          setFormData(initialForm);
          setStatus('idle');
        }
      }
    } catch (error) {
      setAlert({ type: 'error', message: error.message, show: true });
    }
  };

  return (
    <form onSubmit={onSubmit} className='form'>
      {alert.show && (
        <div
          className={
            alert.type === 'success'
              ? 'alert_box alert_box_success'
              : 'alert_box alert_box_error'
          }
        >
          <div
            className='alert_box_btn'
            onClick={() =>
              setAlert({
                type: 'success',
                message: '',
                show: false,
              })
            }
          >
            <MdClose />
          </div>
          {alert.message}
        </div>
      )}
      <div className='form_group'>
        <label htmlFor='fullname'>Full Name</label>
        <input
          name='fullname'
          type='text'
          className='form_control'
          placeholder='Full Name...'
          value={formData.fullname}
          onChange={e => handleValueChange(e)}
        />
      </div>
      <div className='form_group'>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          className='form_control'
          placeholder='Email'
          value={formData.email}
          onChange={e => handleValueChange(e)}
        />
      </div>
      <div className='form_group'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          rows={8}
          className='form_control'
          placeholder='Messages...'
          value={formData.message}
          onChange={e => handleValueChange(e)}
        />
      </div>
      <div className='form_group'>
        <input
          type='submit'
          value={status === 'pending' ? 'Sending...' : 'Submit'}
          className='form_btn'
          disabled={status === 'pending' ? true : false}
        />
      </div>
    </form>
  );
};

export default ContactForm;
