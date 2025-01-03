import { ShiningIcon } from "./ShiningIcon";
import SvgIcon from "@mui/material/SvgIcon";
import DereoIcon from "../../../public/assets/logo/dereo_icon.svg";

const BrandIcon = ({ shining = false }: { shining?: boolean }) => {
  if (shining) {
    return <ShiningIcon />;
  }

  return (
    <SvgIcon
      component={DereoIcon}
      inheritViewBox
      fontSize="large"
      titleAccess=""
      sx={{ color: "secondary.main", height: "100%", width: "auto" }}
    />
  );
};

export default BrandIcon;
