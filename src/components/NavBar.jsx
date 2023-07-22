export default function NavBar(props) {
  return (
    <div class="flex fixed flex flex-col top-24 right-4 w-16 gap-4 bg-primary text-accent shadow">
      <i>A</i>
      <i>B</i>
      <i>C</i>
      <i>D</i>
    </div>
  )
}

function NavBarIcon({icon}) {
  return (
    <div>
      {icon}
    </div>
  )
}