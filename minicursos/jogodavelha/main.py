import math
import win_line as wl

def main(pg, window, data_structure):

    preto = data_structure.preto
    branco = data_structure.branco        
    vermelho = data_structure.vermelho
    verde = data_structure.verde
    azul = data_structure.azul
    cinza = data_structure.cinza
    fonte = data_structure.fonte
    mouse = pg.mouse.get_pos()

    mouse_position_x = mouse[0]
    mouse_position_y = mouse[1]
    
    click = pg.mouse.get_pressed()

    click_last_status = data_structure.click_last_status
    click_on_of = data_structure.click_on_of
    click_position_x = data_structure.click_position_x
    click_position_y = data_structure.click_position_y

    X_or_O_turn = data_structure.X_or_O_turn
    board_array = data_structure.board_array 
    end_game = data_structure.end_game 


    # Escreva o seu código aqui



    pg.display.update()


    data_structure.click_last_status = click_last_status 
    data_structure.click_on_of = click_on_of       
    data_structure.click_position_x = click_position_x  
    data_structure.click_position_y = click_position_y  
    data_structure.board_array = board_array
    data_structure.end_game = end_game
    data_structure.X_or_O_turn = X_or_O_turn

    return data_structure