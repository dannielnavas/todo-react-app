/* eslint-disable react/prop-types */
import useStorageListener from "../../hook/useStorageListener";
function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p>Hubo hubo cambios</p>
        <button onClick={toggleShow}>Volver a cargar la información</button>
      </div>
    );
  } else {
    return null;
  }
}
// const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);
export default ChangeAlert;
