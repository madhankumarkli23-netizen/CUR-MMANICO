import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Image
        src="/m-mani-logo-full.png"
        alt="M MANI & CO"
        width={500}
        height={200}
        className="object-contain"
        priority
      />
    </div>
  );
}
