export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900/50 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-100 mb-4">DevTemplate</h3>
            <p className="text-sm text-slate-400">Next.js + Neon + Drizzle template for developers</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Examples
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-100 mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-100 transition-colors">
                  Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2025 DevTemplate. Built with Next.js, Neon, and Drizzle ORM.</p>
        </div>
      </div>
    </footer>
  )
}
