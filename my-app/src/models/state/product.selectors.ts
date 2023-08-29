import { useAppSelector } from '../../hooks/redux';

export const selectProducts = () => useAppSelector(state => state.productReducer.products);
