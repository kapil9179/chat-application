import styled from "@emotion/styled";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreateIcon from "@mui/icons-material/Create";
import { useContext, useEffect, useState } from "react";
import { ContextContainer } from "../../contextApi/Context";
import "../../style/UserStatus.css";
import "../../style/SetName.css";
import "../../style/dpchange.css";
import { getuserName, setuserstatusapi } from "../../service/api";
import { getuserStatusApi } from "../../service/api";
import { saveDpApi } from "../../service/api";
import { getUserDp } from "../../service/api";
import { toast } from "react-toastify";
import UsernameHolder from "./UsernameHolder";

// styles
const DropdownContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  display: inline-block;
`;

const DropdownContent = styled.div`
  width: 100%;
  height: 95vh;
  overflow-y: hidden;
  position: absolute;
  display: block;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

  z-index: 1;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  animation: slideInFromLeft 0.6s forwards;
`;
const DpHeaderSection = styled(Box)`
  width: 100%;
  height: 130px;
  background-image: radial-gradient(
    circle at top center,
    rgb(145, 186, 14),
    rgb(9, 119, 83)
  );
`;
const DpAroowIcon = styled(Box)`
  padding-top: 6rem;
  padding-left: 1rem;
  color: white;
  display: flex;
  align-items: center;
`;
const ParagraphText = styled.p`
  display: inline-block;
  margin-left: 20px;
  font-size: 20px;
`;

const DpContainer = styled(Box)`
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const DP = styled("img")`
  max-width: 180px;
  border-radius: 50%;
`;

const NameSectionPartTWO = styled(Box)`
  display: flex;
  justify-content: space-between;
  & > :nth-of-type(2) {
    padding-right: 5px;
    font-size: 22px;
    font-weight: 300;
    color: red;
  }
`;
const InformationSection = styled(Box)`
  margin-top: 10px;
  width: 100%;
  height: 70px;
  background-image: linear-gradient(
      145deg,
      rgba(198, 237, 87, 0.08) 0%,
      rgba(109, 137, 69, 0.15) 100%
    ),
    linear-gradient(75deg, rgb(33, 138, 184), rgb(0, 241, 181));
  & > :first-of-child {
    padding-top: 5px;
    padding-left: 5px;
    font-weight: 500;
    font-size: 18px;
  }
`;
const StatusSectionBox = styled(Box)`
  //  border:1px solid black;
  background-color: whitesmoke;
  padding: 10px;
  border-radius: 10px;
`;

function Dpdropdown({ toggle ,setdp}) {
  const { logindata } = useContext(ContextContainer);
  const [openstatusBox, setopenstatusBox] = useState(false);
  const [userstatus, setuserstatus] = useState("");
  const [updatedStatus, setUpdatedStatus] = useState("");
  const [openNamebox, setOpenNameBox] = useState(false);
  const [saveusername, setsaveusername] = useState("");
  const [dpsaver, setsavedp] = useState("");
  // set data which is send to server
  const datasendToServer = {
    userstatus,
    senderId: logindata.sub,
  };
  // because we need when user logout our page refresh data sould be persistent that why implement useeffect and apply get method
  useEffect(() => {
    const handelgetuserstatus = async () => {
      const status = await getuserStatusApi(datasendToServer.senderId);
      if (status) {
        setUpdatedStatus(status.userstatus);
      }
    };
    const handelgetuserName = async () => {
      const data = await getuserName(logindata.sub);
      if (data) {
        setsaveusername(data.username);
      }
    };
    const handelUserDp = async () => {
      const data = await getUserDp(logindata.sub);
      if (data) {
        setsavedp(data.path);
        setdp(data.path)
      }
    };
    handelgetuserstatus();
    handelgetuserName();
    handelUserDp();
  }, []);
  // handle status
  const onstatusHandler = async () => {
    const res = await setuserstatusapi(datasendToServer);
    // when user change satus show immidieatly that why implement this logic
    // when you update two different state in same block of code react batches thease changes and run together example we need to set updated status and after immidiate empty input box
    const updatedStatus = await getuserStatusApi(logindata.sub);
    setUpdatedStatus(updatedStatus.userstatus);
    toast.success("Your status is updated");
    setuserstatus("");
    setopenstatusBox(!openstatusBox);
  };

  // handel url
  const responseHandler = (serverResponse) => {
    setsavedp(serverResponse);
    setdp(serverResponse)
  };

  // logic to handel dp
  const onchangedphandler = async (eve) => {
    if (
      (eve.target.files[0].size < 1024 * 1024 * 2 &&
        eve.target.files[0].type == "image/png") ||
      eve.target.files[0].type == "image/jpeg"
    ) {
      const data = new FormData();
      data.append("file", eve.target.files[0]);
      data.append("senderId", logindata.sub);
      const res = await saveDpApi(data);
      if (res) {
        responseHandler(res.path);
      } else {
        toast.success("wait server is down");
      }
    } else {
      toast.success("file accepted only 1 mb and png or jpeg format");
    }
  };

  return (
    <DropdownContainer>
      <DropdownContent>
        {/* Your dropdown content goes here */}
        <DpHeaderSection>
          <DpAroowIcon>
            <ArrowBackIcon onClick={toggle} />
            <ParagraphText>profile</ParagraphText>
          </DpAroowIcon>
        </DpHeaderSection>

        <div className="dpcontroller">
          <label htmlFor="takedp">
            <input
              type="file"
              id="takedp"
              style={{ display: "none" }}
              onChange={(e) => onchangedphandler(e)}
            />
          </label>
          <button
            className="btn"
            onClick={() => document.getElementById("takedp").click()}
          >
            changedp
          </button>
          <div className="dpcontainer">
            <DpContainer>
              <DP src={dpsaver ? dpsaver : logindata.picture} alt="" />
            </DpContainer>
          </div>
        </div>

        <div className="namesection">
          <h3>Username</h3>
          <div className="namesectioncontent">
            <p className={`${openNamebox ? "hide" : ""}`}>
              {saveusername ? saveusername : logindata.name}
            </p>
            <CreateIcon
              onClick={() => setOpenNameBox(!openNamebox)}
              sx={{ display: openNamebox ? "none" : "block" }}
            />
            {openNamebox && (
              <UsernameHolder
                setsaveusername={setsaveusername}
                setOpenNameBox={setOpenNameBox}
                opennamebox={openNamebox}
              />
            )}
          </div>
        </div>

        <InformationSection>
          <p>
            this is not a your username.this name will be visible to your chat
            contacts
          </p>
        </InformationSection>

        <StatusSectionBox>
          <h3>About</h3>
          <NameSectionPartTWO>
            <p style={{ paddingTop: "10px", fontSize: "16px" }}>
              {updatedStatus ? updatedStatus : "You Can Set Status"}
            </p>
            <CreateIcon onClick={() => setopenstatusBox(!openstatusBox)} />
          </NameSectionPartTWO>
        </StatusSectionBox>
        {openstatusBox && (
          <div>
            <input
              type="text"
              name="status"
              className="input"
              placeholder="Type Status Here minimum 100 words"
              value={userstatus}
              onChange={(e) => setuserstatus(e.target.value)}
            />
            <button onClick={onstatusHandler}>
              <span class="box">Set Status!</span>
            </button>
          </div>
        )}
      </DropdownContent>
    </DropdownContainer>
  );
}

export default Dpdropdown;
