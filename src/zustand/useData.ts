import { create } from 'zustand';

interface Data {
    data: number;
    increaseData: () => void;
    removeAllData: () => void;
    updateData: (newData: number) => void;
}

const useData = create<Data>((set) => ({
    data: 0,
    increaseData: () => set((state) => ({ data: state.data + 1 })),
    removeAllData: () => set({ data: 0 }),
    updateData: (newData: number) => set({ data: newData }),
}));

export default useData;