import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { BiPieChart } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { TfiLayoutMenuSeparated } from "react-icons/tfi";
import { PiCellSignalLowDuotone } from "react-icons/pi";
import { PiCellSignalHighDuotone } from "react-icons/pi";
import { PiCellSignalFullDuotone } from "react-icons/pi";
import { CgDanger } from "react-icons/cg";

export const iconType = {
  "No priority": <TfiLayoutMenuSeparated size={18} />,
  Low: <PiCellSignalLowDuotone size={18} />,
  Medium: <PiCellSignalHighDuotone size={18} />,
  High: <PiCellSignalFullDuotone size={18} />,
  Urgent: <CgDanger size={18} />,
  Todo: <IoCheckmarkCircleOutline size={18} />,
  "In progress": <BiPieChart size={18} />,
  Backlog: <CiClock1 size={18} />,
  Done: <IoCheckmarkCircle size={18} />,
  Canceled: <MdCancel size={18} />,
};
