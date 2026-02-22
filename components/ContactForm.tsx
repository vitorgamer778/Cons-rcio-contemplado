'use client';

import { FormEvent, useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  interestType: 'Imóvel',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário.');
      }

      setStatus('Mensagem enviada com sucesso! Nossa equipe retornará em breve.');
      setFormData(initialState);
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Não foi possível enviar sua solicitação.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm">
      <input
        required
        placeholder="Nome"
        value={formData.name}
        onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        className="w-full rounded-lg border border-brand-navy/20 px-4 py-3"
      />
      <input
        required
        placeholder="Telefone"
        value={formData.phone}
        onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
        className="w-full rounded-lg border border-brand-navy/20 px-4 py-3"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
        className="w-full rounded-lg border border-brand-navy/20 px-4 py-3"
      />
      <select
        value={formData.interestType}
        onChange={(event) => setFormData((prev) => ({ ...prev, interestType: event.target.value }))}
        className="w-full rounded-lg border border-brand-navy/20 px-4 py-3"
      >
        <option>Imóvel</option>
        <option>Veículo</option>
        <option>Pesados</option>
        <option>Serviços</option>
      </select>
      <textarea
        required
        placeholder="Mensagem"
        rows={4}
        value={formData.message}
        onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
        className="w-full rounded-lg border border-brand-navy/20 px-4 py-3"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-brand-navy px-4 py-3 font-semibold text-white transition hover:bg-brand-navy/90 disabled:cursor-wait"
      >
        {loading ? 'Enviando...' : 'Solicitar Proposta'}
      </button>

      {status && <p className="text-sm text-brand-navy/80">{status}</p>}
    </form>
  );
}
