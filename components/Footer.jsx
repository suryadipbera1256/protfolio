export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-[#1f1f1f] pt-12 pb-8 overflow-hidden z-10 mt-auto">
      
      {/* Subtle Top Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="mx-auto w-full max-w-[85rem] px-6 md:px-12 lg:px-16">
        <div className="md:flex md:justify-between gap-10">
          
          {/* Brand Section */}
          <div className="mb-10 md:mb-0 max-w-sm">
            <a href="/about" className="inline-block group">
              <span className="text-2xl font-bold tracking-tight text-[#f4f4f5] group-hover:text-cyan-400 transition-colors duration-300">
                Suryadip Bera
              </span>
            </a>
            <p className="mt-4 text-[#888888] text-sm font-medium leading-relaxed">
              Data Scientist & AI/ML Engineer. Building predictive models, data-driven solutions, and scalable intelligent systems.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
            
            {/* Resources */}
            <div>
              <h2 className="mb-5 text-sm font-bold text-[#f4f4f5] uppercase tracking-wider">Resources</h2>
              <ul className="text-[#888888] font-medium space-y-3 text-sm">
                <li>
                  <a href="https://github.com/suryadipbera1256" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/u/suryadip1256/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Me */}
            <div>
              <h2 className="mb-5 text-sm font-bold text-[#f4f4f5] uppercase tracking-wider">Follow Me</h2>
              <ul className="text-[#888888] font-medium space-y-3 text-sm">
                <li>
                  <a href="https://www.linkedin.com/in/suryadip-bera-0689872ba/" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-5 text-sm font-bold text-[#f4f4f5] uppercase tracking-wider">Legal</h2>
              <ul className="text-[#888888] font-medium space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/0 hover:bg-cyan-400 transition-all"></span>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr className="my-8 border-[#1f1f1f]" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm text-[#888888] font-medium">
            © 2025 <a href="#" className="hover:text-cyan-400 transition-colors duration-300">Suryadip™</a>. All Rights Reserved.
          </span>

          {/* Social Icons - Upgraded to Premium Glowing Circles */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="https://www.facebook.com/share/1HMMggdqkN/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <svg className="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
            
            {/* WhatsApp */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clipRule="evenodd"/>
                <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"/>
              </svg>
              <span className="sr-only">WhatsApp</span>
            </a>

            {/* Twitter */}
            <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <svg className="w-3.5 h-3.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 17">
                <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            {/* GitHub */}
            <a href="https://github.com/suryadipbera1256" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/suryadipb.cse?igsh=bjhuM3hsdzF3OWJr&utm_source=qr" target="_blank" rel="noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#141414] border border-[#262626] text-[#888888] hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              <svg className="w-4 h-4" aria-hidden="true" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}