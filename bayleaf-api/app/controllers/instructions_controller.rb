class InstructionsController < ApplicationController

	def index
		instructions = Instruction.all
		render json: InstructionSerializer.new(instructions)
	end

	def create
		newInstruction = Instruction.new(instruction_params)
		render json: InstructionSerializer.new(newInstruction)
	end

private

	def instruction_params
		params.require(:instruction).permit(:step_num, :content, :recipe_id)
	end

end
