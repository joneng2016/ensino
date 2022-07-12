<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use App\Models\Train;

class TrainController extends Controller
{
    private $train;

    public function __construct() {
        $this->train = new Train();
    }

    public function getAll() {
        return response()->json($this->train->get()->all());
    }

    public function get($id) {
        $train = $this->train->find($id);
        
        if (!$train) {
            return response()->json([
                "message" => "Train not found" 
            ], 404);
        }

        return response()->json($train->get()->first()); 
    }

    public function getByName($name) {
        $train = $this->train->where(['name' => $name]);

        if ($train->get()->isEmpty()) {
            return response()->json([
                "message" => "Train not found" 
            ], 404);
        }

        return response()->json($train->get()->all());
    }

    public function getByNameWithUserInfs($name) {
        $train = $this->train->where(['name' => $name]);

        if ($train->get()->isEmpty()) {
            return response()->json([
                "message" => "Train not found" 
            ], 404);
        }

        $trainElements = $train->get()->map(function($e) {
            $e->users = $e->user()->get()->all();

            return $e;
        });

        return response()->json($trainElements);
    }

    public function newRecord(Request $request) {        
        $response = ['sucess' => false];
        
        try {
            $validated = $request->validate([
                "name" => "required",
                "description" => "required",
                "weight" => "required",
                "times_series" => "required",
                "repetitions" => "required",
                "user_id" => "required"
            ]);

            $attributes = $request->all();
            
            $train = $this->train->insert($attributes);

            $response['sucess'] = true;
            $response['message'] = 'insert is ok';
        } catch (ValidationException $validException) {
            $response['message'] = $validException->getMessage();
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
        }

        return response()->json($response);
    }

    public function update($id,Request $request) {
        $response = ['sucess' => false];
        
        try {
            $train = $this->train->find($id);
            
            if (!$train) {
                return response()->json([
                    "message" => "Train not found" 
                ], 404);
            }

            $attributes = $request->all();

            $train->update($attributes);

            $response['sucess'] = true;
            $response['message'] = 'updated is ok';
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
        }

        return response()->json($response);        
    } 
}
