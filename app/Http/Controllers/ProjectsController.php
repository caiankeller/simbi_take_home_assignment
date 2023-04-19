<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Projects;

class ProjectsController extends Controller

/**
 * @OA\Get(
 *     path="/api/projects",
 *     summary="Get projects while sorting some columns",
 *     tags={"Projects"},
 *     @OA\Parameter(
 *         name="columns",
 *         in="query",
 *         description="array list of columns to retrieve",
 *         @OA\Schema(
 *             type="string"
 *         )
 *     ),
 *     @OA\Parameter(
 *         name="limit",
 *         in="query",
 *         description="Number of records to retrieve",
 *         @OA\Schema(
 *             type="integer"
 *         )
 *     ),
 *     @OA\Response(
 *         response=200,
 *         description="Success",
 *         @OA\JsonContent(
 *             type="object",
 *             @OA\Property(
 *                 property="data",
 *                 type="array",
 *                 @OA\Items()
 *             )
 *         )
 *     )
 * )
 */

{
    public function getProjects(Request $request)
    {
        $columns = $request->input('columns');
        $limit = $request->input('limit') ?? 60; // Set default limit to 60 if not provided

        if (empty($columns)) { // If no columns are requested, select all columns
            $columns = '*';
        }

        $projects = Projects::select($columns)->take($limit)->get()->toJson(JSON_PRETTY_PRINT);

        return response($projects, 200);
    }
}