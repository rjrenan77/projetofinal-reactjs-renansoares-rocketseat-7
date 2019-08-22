import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '~/services/api';
import logo from '~/assets/banner.jpg';
import { Container } from './styles';

export default function Banner() {
  const { defaultValue, registerField } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  return (
    <Container>
      <label htmlFor="banner">
        <img src={preview || logo} alt="" />
        <input
          id="banner"
          type="file"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
