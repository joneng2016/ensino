verde = (0, 255, 0)

column_one = [(90,56), (90,530), 10]
column_two = [(300,56), (300,530), 10]
column_three = [(500,56), (500,530), 10]

line_one = [(80,100),(570,100), 10]
line_two = [(80,300),(570,300), 10]
line_three = [(80,500),(570,500), 10]

diagonal_one = [(30,40), (560,560), 10]
diagonal_two = [(548,82), (82,548), 10]

def win_line(window, board_array, end_game, X_or_O_turn, pg):
    
    newPosition = []

    if compare_line(board_array, 0):
        newPosition = line_one
    elif compare_line(board_array, 1):
        newPosition = line_two
    elif compare_line(board_array, 2):
        newPosition = line_three
    elif condition_diagonal(board_array,'direct'): 
        newPosition = diagonal_one
    elif condition_diagonal(board_array,'not-direct'):
        newPosition = diagonal_two        
    elif condition_column(board_array, 0):
        newPosition = column_one 
    elif condition_column(board_array, 2):
        newPosition = column_three
    else:
        return end_game, X_or_O_turn
 
    return resolution_of_condition(window, pg, 1, 'x', newPosition)

def compare_line(board_array, number_of_line):
    return condition_compare_value_line(board_array, number_of_line, 'x') or condition_compare_value_line(board_array, number_of_line, 'o')

def condition_compare_value_line(board_array, value_of_line, game_type):
    return board_array[value_of_line][0] == game_type and board_array[value_of_line][1] == game_type and board_array[value_of_line][2] == game_type

def condition_column(board_array, number_of_column):
    return condition_compare_value_column(board_array, number_of_column, 'x') or condition_compare_value_column(board_array, number_of_column, 'o')

def condition_compare_value_column(board_array, value_of_column, game_type):
    return board_array[0][value_of_column] == game_type and board_array[1][value_of_column] == game_type and board_array[2][value_of_column] == game_type

def condition_compare_value_diagonal(board_array, game_type):
    return board_array[0][0] == game_type and board_array[1][1] == game_type and board_array[2][2] == game_type

def condition_compare_value_diagonal_second(board_array, game_type):
    return board_array[0][2] == game_type and board_array[1][1] == game_type and board_array[2][0] == game_type

def condition_diagonal(board_array,position):
    if position == 'direct':
        return condition_compare_value_diagonal(board_array, 'x') or condition_compare_value_diagonal(board_array, 'o')
    if position == 'not-direct':
        return condition_compare_value_diagonal_second(board_array, 'x') or condition_compare_value_diagonal_second(board_array, 'o')

def resolution_of_condition(window, pg, end_game, X_or_O_turn, newPosition):
    pg.draw.line(
        window, 
        verde, 
        newPosition[0], 
        newPosition[1], 
        newPosition[2]
    )

    end_game = 1
    X_or_O_turn = 'x'

    return end_game, X_or_O_turn
