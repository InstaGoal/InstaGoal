export default function CardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>   
        {children}
      </section>
    )
  }