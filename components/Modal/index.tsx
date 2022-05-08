import Image from 'next/image';
import React, { FC } from 'react';
import Popup from 'reactjs-popup';
import getBlurDataURL from '../../helper/getBlurDataURL';

type ModalProps = {
  imgUrl: string;
  open: boolean;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ imgUrl, open, onClose }) => {
  return (
    <Popup open={open} closeOnDocumentClick onClose={onClose} lockScroll={true}>
      <div className={'img-popup-content'}>
        <a className='close_btn' onClick={onClose}>
          &times;
        </a>
        <Image
          src={imgUrl}
          alt={`screenshot`}
          width={800}
          height={800}
          objectFit='cover'
          placeholder='blur'
          blurDataURL={getBlurDataURL()}
        />
      </div>
    </Popup>
  );
};

export default Modal;
