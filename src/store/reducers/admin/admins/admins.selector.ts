import type {RootState} from '@/store/types';

type Admins = RootState['adminStore']['admins'];
type AdminsDrawer = RootState['adminStore']['adminsDrawer']

export const selectAdmins = (state: RootState): Admins => state.adminStore.admins;
export const selectAdminsDrawer = (state: RootState): AdminsDrawer => state.adminStore.adminsDrawer;
