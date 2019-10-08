import { 
    faTrash,
    faSignOutAlt, 
    faEdit, 
    faEraser,
    faSpinner,
    faPlusSquare
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";

  const Icons = () => {
  return  library.add(faTrash, faSignOutAlt, faEdit, faEraser, faSpinner, faPlusSquare);
  };

  export default Icons;