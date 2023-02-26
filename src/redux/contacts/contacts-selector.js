export const getAllCons = store => store.contacts;
export const getFilteredContacts = ({ contacts, filter }) => {
    if (!filter) {
        return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.contacts.filter(({ name }) => {
        return (name.toLocaleLowerCase().includes(normalizedFilter))
    })
    return result;
}