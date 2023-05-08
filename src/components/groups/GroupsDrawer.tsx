import { useAppSelector } from "@/store/hooks/useAppSelector";
import { Drawer } from "antd";

export default function GroupsDrawer(): JSX.Element {
  const {open} = useAppSelector(state => state.groupsDrawer)
  return <Drawer>GroupsDrawer</Drawer>;
}
