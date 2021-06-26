import Toast from "react-bootstrap/Toast";

function StatusToast({show,setShow,addedOrUpdated,status}) {
 
  return (
      <>
        <Toast onClose={() => setShow(false)} show={show} delay={3000}  autohide className={`bg ${status?"bg-success":"bg-danger"}`}>
          <Toast.Body className="text-white">{status?"Successfully":"Not"} {addedOrUpdated}</Toast.Body>
        </Toast>
      </>
    );
  }
  
  export default StatusToast;