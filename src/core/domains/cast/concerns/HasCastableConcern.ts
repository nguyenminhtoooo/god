import { TClassConstructor } from "@src/core/interfaces/ClassConstructor.t";
import { TCastableType } from "@src/core/domains/cast/interfaces/IHasCastableConcern";
import Castable from "@src/core/domains/cast/service/Castable";

const HasCastableConcernMixin = (Base: TClassConstructor) => {
    return class extends Base {

        private castable = new Castable();

        getCastFromObject<ReturnType = unknown>(data: Record<string, unknown>, casts = this.casts): ReturnType {
            return this.castable.getCastFromObject(data, casts);
        }

        getCast<T = unknown>(data: unknown, type: TCastableType): T {
            return this.castable.getCast(data, type);
        }

        isValidType(type: TCastableType): boolean {
            return this.castable.isValidType(type);
        }

        casts = {};
    
    }
}

export default HasCastableConcernMixin;