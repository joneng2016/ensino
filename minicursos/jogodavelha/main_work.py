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
# Criação da grade de tabuleiro

    pg.draw.rect(window, branco, (0, 0, 600, 600))
    pg.draw.line(window, preto, (205, 0), (205, 600), 10)
    pg.draw.line(window, preto, (405, 0), (405, 600), 10)
    pg.draw.line(window, preto, (0, 205), (600, 205), 10)
    pg.draw.line(window, preto, (0, 405), (600, 405), 10)


# Criando a lógica de clique

    if click[0] == 0 and click_last_status == 1:
        click_on_of = 1
        click_position_x = (math.ceil(mouse[0]/200) - 1)
        click_position_y = (math.ceil(mouse[1]/200) - 1)
    elif click[0] == 0 and click_last_status == 0:
        click_on_of = 0
        click_position_x = -1
        click_position_y = -1


# desenhando os objetos x e y em suas respectivas posicoes

    for n in range(3):
        for nn in range(3):
            if board_array[nn][n] == 'x':
                pg.draw.line(window, vermelho, ((n * 200) + 30,  (nn * 200) + 30), ((n * 200) + 180, (nn * 200) + 180), 10)
                pg.draw.line(window, vermelho, ((n * 200) + 180, (nn * 200) + 30), ((n * 200) + 30,  (nn * 200) + 180), 10)

            if board_array[nn][n] == 'o':
                pg.draw.circle(window, azul, ((n * 200) + 105,  (nn * 200) + 105), 75)
                pg.draw.circle(window, branco, ((n * 200) + 105,(nn * 200) + 105), 65)

            else:
                pass

# criando a aternancia do jogador

    if click_position_x < 3 and click_position_y < 3:
        if X_or_O_turn == 'x' and board_array[click_position_y][click_position_x ] == 'n' and click_position_x != -1 and end_game == 0:
            board_array[click_position_y][click_position_x ] = 'x'
            X_or_O_turn = 'o'
        if X_or_O_turn == 'o' and board_array[click_position_y][click_position_x ] == 'n' and click_position_x != -1 and end_game == 0:
            board_array[click_position_y][click_position_x ] = 'o'
            X_or_O_turn = 'x'

# monta a linha de finalizacao

    end_game, X_or_O_turn = wl.win_line(window, board_array, end_game, X_or_O_turn, pg)

# criand botão restart

    pg.draw.rect(window, cinza, (700, 100, 200, 65))
    texto = fonte.render('Restart', 1, preto)
    window.blit(texto, (750, 110))

# restart jogo
    if mouse_position_x > 700 and mouse_position_x < 899 and mouse_position_y > 100 and mouse_position_y < 162 and click_last_status == 1 and end_game == 1:

        board_array = [['n','n','n'],
                           ['n','n','n'],
                           ['n','n','n']]
        end_game = 0
# Atualizacao do status do jogo

    count = 0

    for n in range(3):
        for nn in range(3):
            if board_array[nn][n] != 'n':
                count += 1
    if count == 9 and X_or_O_turn == 'x':
        X_or_O_turn = 'o'
        end_game = 1
    elif count == 9 and X_or_O_turn == 'o':
        X_or_O_turn = 'x'
        end_game = 1


# update infs do pg

    click = pg.mouse.get_pressed()

    # Jogo

    count = 0
    for n in range(3):
        for nn in range(3):
            if board_array[nn][n] != 'n':
                count += 1
    if count == 9 and X_or_O_turn == 'x':
        X_or_O_turn = 'o'
        end_game = 1
    elif count == 9 and X_or_O_turn == 'o':
        X_or_O_turn = 'x'
        end_game = 1

    if click[0] == 1:
        click_last_status = 1
    else:
        click_last_status = 0

    pg.display.update()


    data_structure.click_last_status = click_last_status 
    data_structure.click_on_of = click_on_of       
    data_structure.click_position_x = click_position_x  
    data_structure.click_position_y = click_position_y  
    data_structure.board_array = board_array
    data_structure.end_game = end_game
    data_structure.X_or_O_turn = X_or_O_turn

    return data_structure