import Link from 'next/link';
// src/app/about/page.tsx
export default function About() {
    return (
      <div>
        <h1>О нас</h1>
        <Link href="/">
            Вернуться на главную
        </Link>
      </div>
    );
  }