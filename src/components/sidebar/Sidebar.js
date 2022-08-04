import "./sidebar.scss";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";





const Sidebar = () => {

  return (
    <div className="sidebar bg-dark" style={{ color: "white" }}>
      <div className="top">

        <i class="fa-solid fa-bars" style={{ fontSize: "18px" }}></i>

      </div>

      <div className="center">
        <ul>

          <li>
            <i class="fa-solid fa-server"></i>
          </li>


          <li>
            <i class="fa-solid fa-database"></i>
          </li>


          <li>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="grid" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-grid fa-lg"><path fill="currentColor" d="M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 232C0 209.9 17.91 192 40 192H88C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232zM128 440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440zM160 72C160 49.91 177.9 32 200 32H248C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM448 120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120zM320 232C320 209.9 337.9 192 360 192H408C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z" class=""></path></svg>
          </li>

          <li>
            <i class="fa-solid fa-file-arrow-down"></i>
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
          </li>


        </ul>
      </div>
      <div className="bottom">
        <div className="item noti">
          <NotificationsNoneOutlinedIcon className="icon" />
          <div className="counter">1</div>
        </div>
        <div className="item help" style={{fontSize:"20px"}}>
        <i class="fa-solid fa-circle-question"></i>
        </div>
        <div className="item profile">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>

      </div>
    </div>
  );
};

export default Sidebar;
