import BaseEvent from "@src/core/domains/events/base/BaseEvent";
import { IBaseSubscriber } from "@src/core/domains/events/interfaces/IBaseEvent";

class BaseEventSubscriber<TPayload = unknown> extends BaseEvent<TPayload> implements IBaseSubscriber<TPayload> {

    type: 'subscriber' = 'subscriber';

}

export default BaseEventSubscriber