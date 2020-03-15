export const BloomsWheel = () => {
 const [isSpinning, toggleSpin] = useState(true);
 return (
  <img className={isSpinning ? "bloomsWheel" : "bloomsWheelStopped"} src="images/blooms2.png" alt="blooms_wheel" onClick={() => toggleSpin(isSpinning ? false : true)} />
 )
}