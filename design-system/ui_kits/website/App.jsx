// Composes the full Momentum Coaching homepage.
function App() {
  const [booking, setBooking] = React.useState(false);
  const open = () => setBooking(true);
  return (
    <React.Fragment>
      <window.SiteHeader onBook={open}/>
      <main>
        <window.Hero onBook={open}/>
        <window.StatsStrip/>
        <window.Programmes onBook={open}/>
        <window.About/>
        <window.Testimonials/>
        <window.ContactCTA onBook={open}/>
      </main>
      <window.SiteFooter/>
      <window.BookingModal open={booking} onClose={() => setBooking(false)}/>
    </React.Fragment>
  );
}
window.WCApp = App;
