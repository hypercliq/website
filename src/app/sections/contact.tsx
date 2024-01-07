import { AtSymbolIcon, HomeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import dynamic from 'next/dynamic'
import { EmailSVG } from '@/app/components/EmailSVG'

const DynamicCompanyLocationMap = dynamic(
  () => import('@/app/components/CompanyLocationMap'),
  {
    loading: () => <p>Loading map...</p>,
    ssr: false,
  },
)

const Contact = () => (
  <section id="contact" className="bg-surface">
    <div className="m-auto flex max-w-7xl flex-col-reverse items-center justify-center px-4 py-10 md:flex-row md:px-8 md:py-16">
      {/* Map section */}
      <div className="mt-4 h-[500px] w-full md:mt-0 md:w-1/2">
        <DynamicCompanyLocationMap />
      </div>
      {/* Contact details section */}
      <div className="flex flex-col md:ml-8 md:w-1/2">
        <h2 className="mb-2 text-center text-2xl font-bold dark:text-primary md:text-left">
          Let&#39;s Connect
        </h2>
        <p className="mb-4 text-center text-lg md:text-left">
          We are always looking for new challenges and opportunities. If you
          want to know more about us or discuss your project, get in touch!
        </p>
        <div className="flex flex-col items-start">
          <div className="mb-3 flex items-start justify-start">
            <HomeIcon className="mr-4 h-6 w-6 text-accent" />
            <address>
              Prantouna 57
              <br />
              11525 Athens
              <br />
              Greece
            </address>
          </div>
          <div className="mb-3 flex items-center justify-start">
            <PhoneIcon className="mr-4 h-6 w-6 text-accent" />
            <a href="tel:+302112128520">+30 211 212 8520</a>
          </div>
          <div className="mb-3 flex items-center justify-start">
            <AtSymbolIcon className="mr-4 h-6 w-6 text-accent" />
            <EmailSVG email="info@hypercliq.com" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Contact
