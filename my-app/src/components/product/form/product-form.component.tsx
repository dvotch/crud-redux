import React, { memo } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { createProductApi } from '../../../services/product-api.service';
import { useAppDispatch } from '../../../hooks/redux';
import ButtonSubmit from '../../UI/button.submit';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.2rem;
    margin-top: 1rem;
`;

const InputLabel = styled.label`
    display: inline-block;
    width: 20rem;
    height: 5rem;
`;

const TextInputStyle = styled.input`
    width: 20rem;
    height: 2rem;
    border: 2px solid;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

type Inputs = {
    title: string;
    description: string;
};

function ProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const dispatch = useAppDispatch();

    const onSubmit: SubmitHandler<Inputs> = data => {
        dispatch(createProductApi(data));
    };
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>
                Title
                <TextInputStyle placeholder='title' {...register('title', { required: true })} />
                {errors.title && <span>This field is required</span>}
            </InputLabel>

            <InputLabel>
                Description
                <TextInputStyle placeholder='description' {...register('description', { required: true })} />
                {errors.description && <span>This field is required</span>}
            </InputLabel>

            <ButtonSubmit text='Отправить'></ButtonSubmit>
        </Form>
    );
}
export default memo(ProductForm);
