import AuthProvider from "@src/core/domains/auth/providers/AuthProvider";
import ConsoleProvider from "@src/core/domains/console/providers/ConsoleProvider";
import CryptoProvider from "@src/core/domains/crypto/providers/CryptoProvider";
import DatabaseProvider from "@src/core/domains/database/providers/DatabaseProvider";
import EloquentQueryProvider from "@src/core/domains/eloquent/providers/EloquentQueryProvider";
import EventProvider from "@src/core/domains/events/providers/EventProvider";
import HttpProvider from "@src/core/domains/http/providers/HttpProvider";
import LoggerProvider from "@src/core/domains/logger/providers/LoggerProvider";
import MakeProvider from "@src/core/domains/make/providers/MakeProvider";
import MigrationProvider from "@src/core/domains/migrations/providers/MigrationProvider";
import SetupProvider from "@src/core/domains/setup/providers/SetupProvider";
import ValidatorProvider from "@src/core/domains/validator/providers/ValidatorProvider";
import SessionProvider from "@src/core/domains/session/providers/SessionProvider";
import { ILarascriptProviders } from "@src/core/interfaces/ILarascriptProviders";
import { IProvider } from "@src/core/interfaces/IProvider";
import AccessControlProvider from "@src/core/domains/accessControl/providers/AccessControlProvider";


/**
 * Core providers for the framework
 *
 * These providers are loaded by default when the application boots
 *
 * @see {@link IProvider} for more information about providers
 * @see {@link ILarascriptProviders} for providing type hints for providers
 */
const LarascriptProviders: IProvider[] = [

    /**
     * Logger provider
     * 
     * Provides logging services by utilising winston
     */
    new LoggerProvider(),

    /**
     * Console provider
     *
     * Provides console commands and helpers
     */
    new ConsoleProvider(),

    /**
     * Event provider
     *
     * Provides events and listeners
     */
    new EventProvider(),

    /**
     * Database provider
     *
     * Provides database connections and document managers
     */
    new DatabaseProvider(),

    /**
     * Eloquent Query provider
     * 
     * Provides Eloquent-style query builder and model functionality
     */
    new EloquentQueryProvider(),

    /**
     * Http provider
     *
     * Provides Http environment using Express.js
     */
    new HttpProvider(),

    /**
     * Auth provider
     *
     * Provides authentication and authorization services
     */
    new AuthProvider(),

    /**
     * Access control provider
     *
     * Provides access control services
     */
    new AccessControlProvider(),

    /**
     * Migration provider
     *
     * Provides migrations and database schema management
     */
    new MigrationProvider(),

    /**
     * Make provider
     *
     * Provides commands to generate code and setup the application
     */
    new MakeProvider(),

    /**
     * Validator provider
     *
     * Provides validation services
     */
    new ValidatorProvider(),

    /**
     * Crypto provider
     *
     * Provides crypto services
     */
    new CryptoProvider(),

    /**
     * Setup provider
     *
     * Provides setup commands and helpers
     */
    new SetupProvider(),

    /**
     * Session provider
     *
     * Provides session services
     */
    new SessionProvider(),

];

export default LarascriptProviders