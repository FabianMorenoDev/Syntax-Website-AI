import Image from 'next/image'

export default function BrandingShowcase() {
  return (
    <main className="min-h-screen bg-syntax-blue-100 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <Image 
            src="/images/icons/syntax_monogramm_dark_RGB.png" 
            alt="Syntax Logo"
            width={120}
            height={40}
            className="mx-auto mb-6"
            priority
          />
          <h1 className="font-clash-display text-5xl font-bold text-syntax-primary-900 mb-4">
            Syntax Branding Showcase
          </h1>
          <p className="font-clash-grotesk text-xl text-syntax-primary-700">
            Complete brand system implementation for Next.js + Tailwind CSS
          </p>
        </header>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Typography</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-2xl font-bold text-syntax-primary-900 mb-4">ClashDisplay (Headers)</h3>
              <div className="space-y-2">
                <p className="font-clash-display text-4xl font-bold text-syntax-primary-900">Bold Headline</p>
                <p className="font-clash-display text-3xl font-semibold text-syntax-primary-700">Semibold Title</p>
                <p className="font-clash-display text-2xl font-medium text-syntax-primary-500">Medium Subtitle</p>
                <p className="font-clash-display text-xl font-normal text-syntax-primary-300">Regular Text</p>
                <p className="font-clash-display text-lg font-light text-syntax-primary-300">Light Weight</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-2xl font-bold text-syntax-primary-900 mb-4">ClashGrotesk (Body)</h3>
              <div className="space-y-2">
                <p className="font-clash-grotesk text-lg font-bold text-syntax-primary-900">Bold Body Text</p>
                <p className="font-clash-grotesk text-lg font-semibold text-syntax-primary-700">Semibold Body Text</p>
                <p className="font-clash-grotesk text-lg font-medium text-syntax-primary-500">Medium Body Text</p>
                <p className="font-clash-grotesk text-lg font-normal text-syntax-primary-500">Regular Body Text</p>
                <p className="font-clash-grotesk text-base text-syntax-primary-300">This is a longer paragraph to demonstrate how ClashGrotesk looks in body text. It provides excellent readability and modern appearance for web content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Color Palette</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Primary Colors */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Deep Purple (Primary)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-primary-900 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#060f38</div>
                <div className="bg-syntax-primary-700 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#383f60</div>
                <div className="bg-syntax-primary-500 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#6a6f88</div>
                <div className="bg-syntax-primary-300 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#9b9faf</div>
                <div className="bg-syntax-primary-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#cdcfd7</div>
              </div>
            </div>

            {/* Purple Secondary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Purple (Secondary)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-purple-900 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#7656fd</div>
                <div className="bg-syntax-purple-700 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#9178fd</div>
                <div className="bg-syntax-purple-500 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#ad9afe</div>
                <div className="bg-syntax-purple-300 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#c8bcfe</div>
                <div className="bg-syntax-purple-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#e4ddff</div>
              </div>
            </div>

            {/* Yellow CTA */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Yellow (CTA)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-yellow-900 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fff351</div>
                <div className="bg-syntax-yellow-700 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fff573</div>
                <div className="bg-syntax-yellow-500 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fff796</div>
                <div className="bg-syntax-yellow-300 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fffab9</div>
                <div className="bg-syntax-yellow-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fffcdc</div>
              </div>
            </div>

            {/* Pink Accent */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Pink (Accent)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-pink-900 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#e834b6</div>
                <div className="bg-syntax-pink-700 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#ed5dc4</div>
                <div className="bg-syntax-pink-500 h-12 rounded flex items-center px-4 text-white font-clash-grotesk">#f284d3</div>
                <div className="bg-syntax-pink-300 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#f6ade1</div>
                <div className="bg-syntax-pink-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#fad6f0</div>
              </div>
            </div>

            {/* Green Success */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Green (Success)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-green-900 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#56e57d</div>
                <div className="bg-syntax-green-700 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#7aea98</div>
                <div className="bg-syntax-green-500 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#9aefb1</div>
                <div className="bg-syntax-green-300 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#bcf5cb</div>
                <div className="bg-syntax-green-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#dcfae4</div>
              </div>
            </div>

            {/* Blue Neutral */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Blue (Neutral)</h3>
              <div className="space-y-2">
                <div className="bg-syntax-blue-900 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#c8ddf2</div>
                <div className="bg-syntax-blue-700 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#d3e4f5</div>
                <div className="bg-syntax-blue-500 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#ddebf7</div>
                <div className="bg-syntax-blue-300 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#e8f1fa</div>
                <div className="bg-syntax-blue-100 h-12 rounded flex items-center px-4 text-syntax-primary-900 font-clash-grotesk">#f4f8fc</div>
              </div>
            </div>
          </div>
        </section>

        {/* Button Examples */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Button Examples</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <button className="bg-syntax-yellow-900 hover:bg-syntax-yellow-700 text-syntax-primary-900 font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Primary CTA
              </button>
              <button className="bg-syntax-purple-900 hover:bg-syntax-purple-700 text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Secondary Button
              </button>
              <button className="bg-syntax-primary-900 hover:bg-syntax-primary-700 text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Dark Button
              </button>
              <button className="border-2 border-syntax-primary-900 text-syntax-primary-900 hover:bg-syntax-primary-900 hover:text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Outline Button
              </button>
              <button className="bg-syntax-green-900 hover:bg-syntax-green-700 text-syntax-primary-900 font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Success Button
              </button>
              <button className="bg-syntax-pink-900 hover:bg-syntax-pink-700 text-white font-clash-grotesk font-semibold py-3 px-6 rounded-lg transition-colors">
                Accent Button
              </button>
            </div>
          </div>
        </section>

        {/* Team Images */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Team Photos</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              
              <div className="text-center">
                <Image 
                  src="/images/company/felix_ceo.webp" 
                  alt="Felix, CEO"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Felix</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">CEO</p>
              </div>

              <div className="text-center">
                <Image 
                  src="/images/company/basti_sales.png" 
                  alt="Basti, Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Basti</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Sales</p>
              </div>

              <div className="text-center">
                <Image 
                  src="/images/company/dusko_sales.jpg" 
                  alt="Dusko, Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Dusko</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Sales</p>
              </div>

              <div className="text-center">
                <Image 
                  src="/images/company/julie_sales.jpg" 
                  alt="Julie, Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Julie</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Sales</p>
              </div>

              <div className="text-center">
                <Image 
                  src="/images/company/sema_sales.png" 
                  alt="Sema, Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Sema</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Sales</p>
              </div>

              <div className="text-center">
                <Image 
                  src="/images/company/sousan_sales.jpeg" 
                  alt="Sousan, Sales"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-2"
                />
                <p className="font-clash-grotesk font-semibold text-syntax-primary-900">Sousan</p>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Sales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Icons */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Brand Icons</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-syntax-primary-900 mb-4">Light Backgrounds</h3>
              <div className="space-y-6">
                <Image 
                  src="/images/icons/syntax_monogramm_dark_RGB.png" 
                  alt="Syntax Logo Dark"
                  width={200}
                  height={60}
                />
                <Image 
                  src="/images/icons/azav-logo-navy.png" 
                  alt="AZAV Certification"
                  width={150}
                  height={60}
                />
              </div>
            </div>
            
            <div className="bg-syntax-primary-900 p-8 rounded-lg shadow-md">
              <h3 className="font-clash-display text-xl font-bold text-white mb-4">Dark Backgrounds</h3>
              <div className="space-y-6">
                <Image 
                  src="/images/icons/syntax_monogramm_white.png" 
                  alt="Syntax Logo White"
                  width={200}
                  height={60}
                />
                <Image 
                  src="/images/icons/azav-logo-white.png" 
                  alt="AZAV Certification White"
                  width={150}
                  height={60}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stock Images */}
        <section className="mb-16">
          <h2 className="font-clash-display text-4xl font-bold text-syntax-primary-900 mb-8">Stock Images</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/stock/co-working-people-working-together.jpg" 
                  alt="Co-working people"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-clash-display text-lg font-bold text-syntax-primary-900 mb-2">Collaboration</h3>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Perfect for tech courses and community sections</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/stock/colleagues-discussing-new-ideas-business-meeting.jpg" 
                  alt="Business meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-clash-display text-lg font-bold text-syntax-primary-900 mb-2">Professional</h3>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Ideal for project-based learning and UX/UI design</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/stock/menschen-die-spass-ihrer-pause-haben.jpg" 
                  alt="Team culture"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-clash-display text-lg font-bold text-syntax-primary-900 mb-2">Culture</h3>
                <p className="font-clash-grotesk text-sm text-syntax-primary-500">Great for campus culture and social media</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <Image 
              src="/images/icons/syntax_monogramm_dark_RGB.png" 
              alt="Syntax Logo"
              width={80}
              height={25}
            />
            <Image 
              src="/images/icons/azav-logo-navy.png" 
              alt="AZAV Certification"
              width={60}
              height={25}
            />
          </div>
          <p className="font-clash-grotesk text-syntax-primary-500">
            Complete Syntax brand system ready for implementation
          </p>
        </footer>

      </div>
    </main>
  )
} 