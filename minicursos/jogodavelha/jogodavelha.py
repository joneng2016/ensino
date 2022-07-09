import win_line as wl
import pygame as pg
import pandas as pd
import math

preto = (0, 0, 0)
branco = (255, 255, 255)
vermelho = (255, 0, 0)
verde = (0, 255, 0)
azul = (0, 0, 255)
cinza = (150, 150, 150)

window = pg.display.set_mode((1000, 600))
window.fill(branco)

pg.font.init()

fonte = pg.font.SysFont("Comic Sams MS", 30)

board_array = [['n','n','n'],
               ['n','n','n'],
               ['n','n','n']]

click_last_status = 0
click_on_of = 0
click_position_x = -1
click_position_y = -1

X_or_O_turn = 'x'

end_game = 0


def grade_do_tabuleiro(window):
    pg.draw.rect(window, branco, (0, 0, 600, 600))
    pg.draw.line(window, preto, (205, 0), (205, 600), 10)
    pg.draw.line(window, preto, (405, 0), (405, 600), 10)
    pg.draw.line(window, preto, (0, 205), (600, 205), 10)
    pg.draw.line(window, preto, (0, 405), (600, 405), 10)

def click_logic(click_on_of, click_last_status, x,y):
    if click[0] == 0 and click_last_status == 1:
        click_on_of = 1
        x = (math.ceil(mouse[0]/200) - 1)
        y = (math.ceil(mouse[1]/200) - 1)
    elif click[0] == 0 and click_last_status == 0:
        click_on_of = 0
        x = -1
        y = -1
    return click_on_of, click_last_status, x, y

def draw_selected_cell(window, board_array):
    for n in range(3):
        for nn in range(3):
            if board_array[nn][n] == 'x':
                jogador_x(window, n, nn)
            if board_array[nn][n] == 'o':
                jogador_o(window, n, nn)
            else:
                pass

def board_array_data(board_array, X_or_O_turn, end_game, x,y):
    print(X_or_O_turn)
    if x < 3 and y < 3:
        if X_or_O_turn == 'x' and board_array[y][x] == 'n' and x != -1 and end_game == 0:
            board_array[y][x] = 'x'
            X_or_O_turn = 'o'
        if X_or_O_turn == 'o' and board_array[y][x] == 'n' and x != -1 and end_game == 0:
            board_array[y][x] = 'o'
            X_or_O_turn = 'x'
    return board_array, X_or_O_turn

def restart_button(window):
    pg.draw.rect(window, cinza, (700, 100, 200, 65))
    texto = fonte.render('Restart', 1, preto)
    window.blit(texto, (750, 110))

def restart_game(board_array, x, y, end_game, click_on_of):
    if click_on_of == 1 and end_game == 1:
        if x >= 700 and x <= 900 and y >= 100 and y <= 165:
            board_array = [['n','n','n'],
                           ['n','n','n'],
                           ['n','n','n']]
            end_game = 0
    return board_array, end_game

def game_status(board_array, X_or_O_turn, end_game):
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
    return end_game, X_or_O_turn

def jogador_x(window, x,y):
    pg.draw.line(window, vermelho, ((x * 200) + 30,  (y * 200) + 30), ((x * 200) + 180, (y * 200) + 180), 10)
    pg.draw.line(window, vermelho, ((x * 200) + 180, (y * 200) + 30), ((x * 200) + 30,  (y * 200) + 180), 10)

def jogador_o(window, x,y):
    print('aaa')
    pg.draw.circle(window, azul, ((x * 200) + 150,  (y * 200) + 150), 75)
    pg.draw.circle(window, branco, ((x * 200) + 105,  (y * 200) + 150), 65)


while True:
    for event in pg.event.get():
        if event.type == pg.QUIT:
            pg.quit()
            quit()
    
    mouse = pg.mouse.get_pos()
    mouse_position_x = mouse[0]
    mouse_position_y = mouse[1]


    click = pg.mouse.get_pressed()

    # Jogo
    
    grade_do_tabuleiro(window)
    click_on_of, click_last_status, click_position_x, click_position_y = click_logic(click_on_of, click_last_status, click_position_x, click_position_y)
    draw_selected_cell(window, board_array)
    board_array, X_or_O_turn = board_array_data(board_array, X_or_O_turn, end_game, click_position_x, click_position_y)
    end_game, X_or_O_turn = wl.win_line(window, board_array, end_game, X_or_O_turn, pg)
    restart_button(window)
    board_array, end_game = restart_game(board_array, mouse_position_x, mouse_position_y, end_game, click_on_of)
    end_game, X_or_O_turn = game_status(board_array, X_or_O_turn, end_game)

    if click[0] == 1:
        click_last_status = 1
    else:
        click_last_status = 0

    pg.display.update()