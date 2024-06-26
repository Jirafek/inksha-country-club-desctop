import { create } from 'zustand';

export const useURLData = create((set) => ({
    utm_source: '',
    utm_campaign: '',
    utm_content: '',
    clientId: null,
    setClienId: (id) => set({ clientId: id }),
    updateData: (source, campaign, content) => set({ utm_source: source, utm_campaign: campaign, utm_content: content }),
    phoneContent: [],
    updatePhoneContent: (newPhoneContent) => set({ phoneContent: newPhoneContent }),
}));

export const URLData = {
    utm_source: '',
    utm_campaign: '',
    utm_content: ''
}


export const updateURLData = (source, campaign, content) => {
    URLData.utm_campaign = campaign;
    URLData.utm_content = content;
    URLData.utm_source = source;
}
