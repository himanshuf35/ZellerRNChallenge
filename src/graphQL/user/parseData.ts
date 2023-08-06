export const parseCustomersList = (data: any) => {
  return Array.isArray(data)
    ? data.map(user => ({
        id: user?.id ?? '',
        name: user?.name ?? '',
        role: user?.role ?? '',
      }))
    : [];
};
