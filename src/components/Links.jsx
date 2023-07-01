import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const data = [
  {
    id: 1,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/github.png",
    name: "Github",
  },
  {
    id: 2,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/bitbucket.png",
    name: "BitBacket",
  },
  {
    id: 3,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/dribbble.png",
    name: "Dribble",
  },
  {
    id: 4,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/dropbox.png",
    name: "Dropbox",
  },
  {
    id: 5,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/mail_chimp.png",
    name: "Mail Chrimp",
  },
  {
    id: 6,
    image:
      "https://themesdesign.in/tocly/layouts/assets/images/brands/slack.png",
    name: "Slack",
  },
];

export default function Links() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="h-full hidden md:block">
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="h-full"
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy1SvWn-rz1xLVlqak0wkwUOGKujo2C-xDtc8XTEZ-gQ&s"
          alt=""
          className="w-[35px]"
        />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className="grid grid-cols-3 p-2 gap-10">
          {data.map((item) => {
            return (
              <div
                className="flex items-center w-full cursor-pointer justify-center flex-col"
                key={item.id}
              >
                <img src={item.image} className="w-[30px]" alt="" />
                <p className="text-center mt-2 text-lg text-slate-400">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      </Menu>
    </div>
  );
}
