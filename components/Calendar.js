import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Calendario = ({ultimoConsumo}) => {
  const [eventos, setEventos] = useState({});

  

  return (
    <View>
      <Calendar
        markedDates={ultimoConsumo} // Los días con eventos se marcarán aquí
        onDayPress={(day) => {
          // Manejar la interacción del usuario con un día específico si es necesario
          console.log(ultimoConsumo);

        }}
        theme={{
            calendarBackground: '#ffffff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#ffffff',
          }}
      />
    </View>
  );
};

export default Calendario;
