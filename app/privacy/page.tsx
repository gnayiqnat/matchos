export default function Privacy() {
	return (
		<>
			<section className='max-w-200 mx-auto pt-10 pb-25 px-8 flex flex-col gap-10 justify-center items-start text-pretty text-justify'>
				<div className='flex flex-col gap-3'>
					<h1 className='text-4xl'>Privacy Notice</h1>

					<p>
						This Privacy Notice explains how <strong>MATCHOS</strong> ("we", "us", or
						"our") collects, uses, discloses, and protects personal data in connection
						with our website and food ordering services, in accordance with the
						Malaysian Personal Data Protection Act 2010 ("PDPA") and applicable laws.
					</p>

					<p className='text-sm text-foreground-500'>
						Last updated: 1 September 2026
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl'>1. Information We Collect</h2>

					<p>
						Our website primarily functions as an online menu and provides information
						about our food products and services. We collect limited personal data
						directly through the website.
					</p>

					<div className='flex flex-col gap-5'>
						<p>
							<strong>Website Analytics</strong>
						</p>

						<p>
							We use <strong>Vercel Analytics</strong> to understand how visitors use
							our website, monitor website performance, and improve our online menu
							experience.
						</p>

						<p>
							Analytics information may include information such as page views, general
							geographic information, device or browser information, and other usage or
							technical information generated when you access the website.
						</p>

						<p>
							Vercel provides analytics and website hosting services to us. For more
							information about how Vercel processes information, please refer to
							Vercel's own privacy notice.
						</p>
					</div>

					<div className='flex flex-col gap-5'>
						<p>
							<strong>WhatsApp Orders</strong>
						</p>

						<p>
							We do not provide an online order form or payment gateway directly
							through this website.
						</p>

						<p>
							When you choose to place an order, the website may open WhatsApp with a
							pre-filled message containing an order template. You may edit the message
							and provide whatever information is necessary for us to process your
							order.
						</p>

						<p>Depending on what you provide, this may include your:</p>

						<ul className='list-disc pl-6 flex flex-col gap-2'>
							<li>name;</li>
							<li>telephone or WhatsApp number;</li>
							<li>order details;</li>
							<li>{/* delivery or */} pickup information;</li>
							{/*<li>delivery address; and</li> */}
							<li>other information you voluntarily provide to us.</li>
						</ul>

						<p>
							This information is provided directly to us through WhatsApp when you
							send the message.
						</p>

						<p>
							WhatsApp and Meta may separately process information in connection with
							their services in accordance with their own privacy policies and terms.
						</p>
					</div>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl text-start'>
						2. How We Use Your Personal Data
					</h2>

					<p>We may use personal data for the following purposes:</p>

					<div className='flex flex-col gap-5'>
						<p>
							<strong>Website and Analytics</strong>
						</p>

						<p>We use analytics information to:</p>

						<ul className='list-disc pl-6 flex flex-col gap-2'>
							<li>monitor website performance and functionality;</li>
							<li>understand general website usage;</li>
							<li>identify technical issues; and</li>
							<li>improve our website and digital menu.</li>
						</ul>
					</div>

					<div className='flex flex-col gap-5'>
						<p>
							<strong>Food Orders and Customer Communications</strong>
						</p>

						<p>We use information provided through WhatsApp to:</p>

						<ul className='list-disc pl-6 flex flex-col gap-2'>
							<li>receive and process food orders;</li>
							<li>communicate with you regarding your order;</li>
							<li>arrange delivery or pickup;</li>
							<li>respond to customer enquiries;</li>
							<li>resolve complaints or other customer service matters; and</li>
							<li>maintain appropriate business records.</li>
						</ul>
					</div>

					<p>
						We will only use personal data for purposes that are reasonably necessary
						for our business operations and the services you request from us, or
						otherwise where permitted or required by applicable law.
					</p>
				</div>

				{/* 3. Third-Party Service Providers */}
				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl text-start'>
						3. Third-Party Service Providers
					</h2>

					<p>
						We use third-party service providers to operate our website and ordering
						process. These may include:
					</p>

					<ul className='list-disc pl-6 flex flex-col gap-3'>
						<li>
							<strong>Vercel</strong> – website hosting and analytics services.
						</li>

						<li>
							<strong>WhatsApp / Meta</strong> – messaging and communication services
							used for receiving customer orders and enquiries.
						</li>
					</ul>

					<p>
						These third parties may process information in accordance with their own
						terms, privacy policies, and applicable laws.
					</p>

					<p>We do not sell or rent your personal data.</p>

					<p>
						We may disclose or provide access to personal data to service providers
						where reasonably necessary to operate our website, process orders, provide
						services, comply with legal obligations, prevent fraud or misuse, or
						protect our rights and interests.
					</p>

					<p>
						Some third-party service providers may process personal data outside
						Malaysia. Where applicable, we will take reasonable steps to ensure that
						personal data is handled in accordance with applicable data protection
						requirements.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl text-start'>
						4. Retention of Personal Data
					</h2>

					<p>
						We retain personal data only for as long as it is reasonably necessary for
						the purposes for which it was collected.
					</p>

					<p>
						For example, order information may be retained for as long as necessary
						to:
					</p>

					<ul className='list-disc pl-6 flex flex-col gap-2'>
						<li>fulfil and manage your order;</li>
						<li>respond to customer service matters or disputes;</li>
						<li>maintain appropriate business and accounting records; and</li>
						<li>comply with legal or regulatory obligations.</li>
					</ul>

					<p>
						When personal data is no longer required, we will take reasonable steps to
						delete, destroy, or otherwise dispose of it securely, where appropriate.
					</p>

					<p>
						Please note that messages and information stored within WhatsApp may
						remain subject to WhatsApp's own systems, retention practices, and
						policies.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl'>5. Security</h2>

					<p>
						We take reasonable steps to protect personal data in our possession or
						under our control from loss, misuse, unauthorized access, disclosure,
						alteration, or destruction.
					</p>

					<p>
						However, no method of transmission or electronic storage is completely
						secure, and we cannot guarantee absolute security.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl'>6. Your Rights</h2>

					<p>
						Subject to applicable laws and certain exceptions under the PDPA, you may
						have rights to:
					</p>

					<ul className='list-disc pl-6 flex flex-col gap-2'>
						<li>request access to personal data that we hold about you;</li>

						<li>request correction of inaccurate or incomplete personal data;</li>

						<li>
							make enquiries or complaints regarding our handling of your personal
							data.
						</li>
					</ul>

					<p>
						To make a request or enquiry, please contact us using the details provided
						below.
					</p>

					<div className='bg-background-secondary p-5 flex flex-col gap-1 rounded-xl'>
						<p>
							<strong>Privacy Contact:</strong>
						</p>

						<p>
							<strong>Name: </strong>
							MATCHOS
						</p>
						<p>
							<strong>Email: </strong>
							matchosprivacy@tanqiyang.com
						</p>
					</div>

					<p>
						We may need to verify your identity before responding to certain requests.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl text-start'>
						7. Changes to This Privacy Notice
					</h2>

					<p>
						We may update this Privacy Notice from time to time to reflect changes to
						our business, website, services, or legal requirements.
					</p>

					<p>
						Any updated version will be published on this page together with the
						updated date.
					</p>
				</div>

				<div className='flex flex-col gap-6'>
					<h2 className='text-2xl md:text-3xl text-start'>8. Contact Us</h2>

					<p>
						If you have any questions, concerns, or requests regarding this Privacy
						Notice or your personal data, please contact us:
					</p>

					<div className='bg-background-secondary p-5 flex flex-col gap-1 rounded-xl'>
						<p>
							<strong>MATCHOS</strong>
						</p>

						<p>
							<strong>Email:</strong> matchos@tanqiyang.com
						</p>
					</div>

					<p className='text-sm text-foreground-500'>
						Last updated: 1 September 2026
					</p>
				</div>
			</section>
		</>
	);
}
