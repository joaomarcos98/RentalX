import { CreateSpecificationUseCase } from "./CreateSpecificationService";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationRepository } from "../../repositories/implementation/SpecificationRepository";


const specificationRepository = new SpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export {createSpecificationController};
