import Link from 'next/link';
import Hero from '../components/sections/Hero';
import Testimonials from '../components/sections/Testimonials';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';

export default function Home() {
  // Taking the first 3 Facebook photos for the preview section
  const recentPhotos = [
    'https://www.facebook.com/photo.php?fbid=122108136632940517&set=pb.61578215536016.-2207520000&type=3',
    'https://www.facebook.com/photo/?fbid=122113689590940517&set=pb.61578215536016.-2207520000',
    'https://www.facebook.com/photo/?fbid=122117386526940517&set=pb.61578215536016.-2207520000'
  ];

  return (
    <div>
      <Hero />

      {/* Home About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Dhaka&lsquo;s Most Reliable HVAC Experts</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-10">
            HR Engineering delivers professional installation, maintenance, and repair services for residential and industrial systems. Our expert field technicians ensure your cooling systems run perfectly year-round.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
      </section>

      {/* Home Gallery Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Recent Installations" subtitle="Glimpses of our field work across Dhaka." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {recentPhotos.map((link, i) => (
              <Link
                href="/gallery"
                key={i}
                className="relative rounded-xl overflow-hidden shadow-md h-64 border border-slate-200 bg-slate-100 block group"
              >
                {/* Embedded Facebook Photo */}
                <iframe
                  src={`https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(link)}&show_text=false&width=350`}
                  className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  loading="lazy"
                ></iframe>

                {/* Invisible click catcher that routes to the gallery page */}
                <div className="absolute inset-0 z-10 cursor-pointer bg-black/5 group-hover:bg-black/10 transition-colors duration-300"></div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <Button variant="primary">View Full Photo Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Quick Contact CTA */}
      <section className="py-20 bg-teal-600 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Need Immediate AC Service?</h2>
          <p className="text-teal-100 text-lg mb-8">Our expert field technicians are ready to deploy anywhere in Dhaka.</p>
          <Link href="/contact">
            <Button variant="secondary" className="text-teal-600 font-bold">
              Book Service Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}