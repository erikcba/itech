import Sidebar from './Sidebar'

const MainLayout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <main style={{ flex: 1, padding: '1rem' }}>
      {children}
    </main>
  </div>
)

export default MainLayout