import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-container-img-gear-container">
        <Image src="/gear.svg" alt="gear-icon" layout="fill" />
      </div>
      Habit Tracker
      <div className="navbar-container-img-sliders-container">
        <Image src="/sliders.svg" alt="gear-icon" layout="fill" />
      </div>
    </div>
  );
}
