import ScrollToTopButton from './ScrollToTopButton'

const MainContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <main className="bg-surface py-8 md:py-16">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {children}
        <ScrollToTopButton />
      </div>
    </main>
  )
}

export default MainContainer
