import React, { useCallback } from 'react';
import {
    // eslint-disable-next-line import/named
    ProgramItem,
    ProgramBox,
    ProgramContent,
    ProgramFlex,
    ProgramStack,
    ProgramTitle,
    ProgramText,
    ProgramImage,
    useProgram,
  } from '@nessprim/planby-pro';
  import { useNavigate } from 'react-router-dom';
  
  export const Program = ({ isVerticalMode, program, ...rest }: ProgramItem) => {
    const navigate = useNavigate();
    const { styles, formatTime, set12HoursTimeFormat, isLive, isMinWidth } =
      useProgram({
        isVerticalMode,
        program,
        ...rest,
      });
  
    const { data } = program;
    const { image, title, since, till } = data;
  
    const sinceTime = formatTime(since, set12HoursTimeFormat()).toLowerCase();
    const tillTime = formatTime(till, set12HoursTimeFormat()).toLowerCase();

    const handleProgramClick = useCallback(() => {
        console.log(program)

        navigate('/asset', { state: { data: program.data }})

    }, [program])
  
    return (
      <ProgramBox width={styles.width} style={styles.position} onClick={handleProgramClick}>
        <ProgramContent
          isVerticalMode={isVerticalMode}
          width={styles.width}
          isLive={isLive}
        >
          <ProgramFlex isVerticalMode={isVerticalMode}>
            {isLive && isMinWidth && (
              <ProgramImage
                isVerticalMode={isVerticalMode}
                src={image}
                alt="Preview"
              />
            )}
            <ProgramStack>
              <ProgramTitle>{title}</ProgramTitle>
              <ProgramText>
                {sinceTime} - {tillTime}
              </ProgramText>
            </ProgramStack>
          </ProgramFlex>
        </ProgramContent>
      </ProgramBox>
    );
};