import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import * as S from './styles';
import { Gradient } from '../../components';
import { editCharacterInfo } from '../../store/modules/character';

const mySchema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório.'),
  description: Yup.string(),
});

const CharacterInfo = ({
  navigation,
  route: {
    params: { item },
  },
}) => {
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(mySchema),
  });

  const onSubmit = (data) => {
    setEditable(false);
    dispatch(editCharacterInfo({ id: item.id, ...data }));
  };

  return (
    <S.Container>
      <Gradient>
        <S.Container>
          <S.Image
            source={{
              uri: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
            }}
          />
          <S.Content>
            <Controller
              control={control}
              name="name"
              defaultValue={item.name}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(text) => onChange(text)}
                  fontBold
                  editable={editable}
                />
              )}
            />
            <Controller
              control={control}
              name="description"
              defaultValue={item.description}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.TextInput
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(text) => onChange(text)}
                  editable={editable}
                  multiline
                />
              )}
            />
            <S.ContainerButton>
              <S.Button onPress={() => navigation.goBack()}>
                <S.Label>Voltar</S.Label>
              </S.Button>
              <S.Button
                onPress={() => {
                  if (!editable) return setEditable(true);
                  return handleSubmit(onSubmit)();
                }}>
                <S.Label>{editable ? 'Salvar' : 'Editar'}</S.Label>
              </S.Button>
            </S.ContainerButton>
          </S.Content>
        </S.Container>
      </Gradient>
    </S.Container>
  );
};

export default CharacterInfo;
