import { useState } from 'react'

function Contact() {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error' | 'error-subject'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.subject) {
      setStatus('error-subject')
      setTimeout(() => setStatus(null), 1000)
      return
    }

    setStatus('sending')

    fetch('https://formspree.io/f/xoeajkly', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setStatus('success')
          setFormData({ name: '', email: '', subject: '', message: '' })
          setTimeout(() => setStatus(null), 5000)
        } else {
          setStatus('error')
          setTimeout(() => setStatus(null), 5000)
        }
      })
      .catch(() => {
        setStatus('error')
        setTimeout(() => setStatus(null), 5000)
      })
  }
    return (
        <div className="px-8 md:px-14 bg-stone-50 h-screen transition-colors duration-300 ease-in-out dark:bg-stone-950">
      <section className="md:mb-12 mb-8">
        <p className="md:text-[16rem] text-6xl tracking-tight font-bold text-black dark:text-white">Contact</p>
      </section>

<section className="w-full flex-col items-center justify-between flex gap-10 md:gap-0 md:flex-row">
  {/* Colonne gauche : champs "ligne" */}
  <section className="md:w-1/3 w-full">
    <form onSubmit={handleSubmit} id="contact-form" className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-1">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Votre nom"
          className="bg-transparent border-0 border-b border-stone-400 dark:border-stone-600 rounded-none px-0 py-2 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 outline-none focus:border-pink-400 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="vous@exemple.com"
          className="bg-transparent border-0 border-b border-stone-400 dark:border-stone-600 rounded-none px-0 py-2 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 outline-none focus:border-pink-400 transition-colors duration-200"
        />
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Description de votre projet"
          className="bg-transparent border-0 border-b border-stone-400 dark:border-stone-600 rounded-none px-0 py-2 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 outline-none focus:border-pink-400 transition-colors duration-200 resize-none"
        />
      </div>
    </form>
  </section>

  {/* Colonne droite : sujet en grand texte */}
  <div className="flex flex-col gap-6 justify-center">
    {['montage', 'motion-design', 'autres'].map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => setFormData({ ...formData, subject: option })}
        className={`text-left text-6xl md:text-9xl font-bold transition-colors duration-200 ${
          formData.subject === option
            ? 'text-pink-500'
            : status === 'error-subject'
            ? 'text-red-400'
            : 'text-stone-400 dark:text-stone-500 hover:text-stone-600 dark:hover:text-stone-300'
        }`}
      >
        {option === 'montage' ? 'Montage' : option === 'motion-design' ? 'Motion Design' : 'Autres'}
      </button>
    ))}

    {status === 'error-subject' && (
      <p className="text-red-600 dark:text-red-400 text-sm">Merci de choisir un sujet.</p>
    )}
  </div>
</section>

<section className="flex w-full items-center mt-10">
  <button
    type="submit"
    form="contact-form"
    disabled={status === 'sending'}
    className="mt-2 self-start rounded-full bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold py-3 px-20 transition-all duration-300 ease-in-out disabled:opacity-50"
  >
    {status === 'sending' ? 'Envoi...' : 'Envoyer'}
  </button>

  {status === 'error' && (
    <p className="text-red-600 dark:text-red-400 text-sm">Une erreur est survenue, réessayez.</p>
  )}
</section>

{status === 'success' && (
  <div
    onClick={() => setStatus(null)}
    className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 backdrop-blur-sm cursor-pointer"
  >
    <p className="text-4xl md:text-6xl font-bold text-white text-center px-6">
      Message envoyé avec succès !
    </p>
  </div>
)}
      </div>
  )
}

export default Contact