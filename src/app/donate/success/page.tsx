import Link from 'next/link'

export default function DonateSuccess() {
  return (
    <main className="donate-success">
      <div className="donate-success__card">
        <span className="donate-success__emoji">☕</span>
        <h1 className="donate-success__title">Thanks so much!</h1>
        <p className="donate-success__desc">You just bought me a coffee. I really appreciate it.</p>
        <Link href="/" className="btn btn-primary">← Back home</Link>
      </div>
    </main>
  )
}
